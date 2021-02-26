import pandas as pd
import re
import statistics as s
import xml.etree.ElementTree as et 

def main():
    xtree = et.parse("../data/gugilta.xml")
    xroot = xtree.getroot()
    df_cols = ["series_title", "series_type", "series_episodes", "my_score", "my_status"]
    rows = []

    j = 0;
    for node in xroot:
        if j != 0:
            s_title = node.attrib.get("series_title").text if node is not None else None
            s_type = node.attrib.get("series_type").text if node is not None else None
            s_episodes = node.find("series_episodes").text if node is not None else None
            s_score = node.find("my_score").text if node is not None else None
            s_status = node.find("my_status").text if node is not None else None
    
            rows.append({"series_title": s_title, "series_type": s_type, "series_episodes": s_episodes, 
                 "my_score": s_score, "my_status": s_status})
        j = j + 1

    out_df = pd.DataFrame(rows, columns = df_cols)
    
    out_df.to_csv('../data/gugilta_clean.csv')

if __name__ == "__main__":
    main()
