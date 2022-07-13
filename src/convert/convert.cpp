#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <map>
#include <list>
#include <sstream>
#include "../csvstream/csvstream.h"
#include <list>
#include <set>


class Machine {
private:
	std::vector<std::map<std::string, std::string>> flowchartNodeList[15];
	std::string all_options[8];
	std::set<std::string> dictionary;
	std::set<std::string> prompt_list;

public:
	Machine() {
		all_options[0] = "opt_1";
		all_options[1] = "opt_2";
		all_options[2] = "opt_3";
		all_options[3] = "opt_4";
		all_options[4] = "opt_5";
		all_options[5] = "opt_6";
		all_options[6] = "opt_7";
		all_options[7] = "opt_8";
	};

	std::string formatEntry(std::string input_entry) {

		std::string::iterator it = input_entry.begin();

		for (; it != input_entry.end(); ++it) {
			if (!isalpha(*it)) {
				*it = '_';
			}
			else {
				*it = tolower(*it);
			}
		}

		return input_entry;
	}

	void readFromSheets(std::string& animeSheetName) {

		csvstream animeCSV(animeSheetName);
		
		// Rows have key = column name, value = cell datum
		std::map<std::string, std::string> row;

		while (animeCSV >> row) {
			flowchartNodeList[stoi(row["importance"])].push_back(row);

			if (dictionary.find(row["subject_str"]) != dictionary.end()) {
				std::cout << "Subject Repeated: " << row["subject_str"] << std::endl;
			}
			else {
				dictionary.insert(row["subject_str"]);
			}
		}
	}

	void outputToFile() {
		std::ofstream fout("../js/raw_data.js");

		std::ostringstream ending;
		ending << "let map = new Map();" << std::endl;

		for (int imp = 14; imp >= 0; --imp) {
			std::vector<std::map<std::string, std::string>> specificSet = flowchartNodeList[imp];
			for (auto &entry : specificSet) {
				std::ostringstream singleNodeStream;

				singleNodeStream << "let " << formatEntry(entry["subject_str"]) << " = [" << std::endl;
				singleNodeStream << "    \"" << entry["subject_str"] << "\"," << std::endl;
				if (entry["opt_1"] == "") {
					entry["q_prompt"] = "Go scroll down to learn more about " + entry["subject_str"];
				}
				else if (entry["q_prompt"] == "") {
					entry["q_prompt"] = "We chose " + entry["opt_1"] + " for you!";
				}
				singleNodeStream << "    \"" << entry["q_prompt"] << "\"," << std::endl;
				for (auto& current_opt : all_options) {
					if (entry[current_opt].empty()) break;
					singleNodeStream << "    " << formatEntry(entry[current_opt]) << "," << std::endl;
				}
				singleNodeStream << "]" << std::endl;

				ending << "map.set(\"" << entry["q_prompt"] << "\", " << formatEntry(entry["subject_str"]) << ");" << std::endl;
				ending << "map.set(\"" << entry["subject_str"] << "\", " << formatEntry(entry["subject_str"]) << ");" << std::endl;

				if (prompt_list.find(entry["q_prompt"]) != prompt_list.end()) {
					std::cout << "Prompt Repeated: " << entry["q_prompt"] << std::endl;
				}
				else {
					prompt_list.insert(entry["q_prompt"]);
				}



				fout << singleNodeStream.str();
			}

		}
		ending << "export { map };" << std::endl;

		fout << ending.str();
	}

};

int main(int argc, char* argv[]) {

	std::string animeSheetName = "anime_flowchart_data.csv";
	if (argc == 2) {
		animeSheetName = argv[1];
	}

	Machine machine;

	// This should store it into data files
	machine.readFromSheets(animeSheetName);
	
	// This should spit it out
	machine.outputToFile();

	std::cout << "Everything was succesfully updated!" <<std::endl;

}
