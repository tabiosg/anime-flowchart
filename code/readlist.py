import pandas as pd
import re
import statistics as s
import xml.etree.ElementTree as et
import os

def sort(df):
    df = df.sort_values(by=['mal_user', 'my_score', 'series_type', 'my_status'])
    return df

def list_to_df(df, location):
    xtree = et.parse(location)
    xroot = xtree.getroot()
    df_cols = ["mal_user", "series_title", "series_type", "series_episodes", "my_score", "my_status"]
    rows = []

    j = 0;
    for node in xroot:
        if j == 0:
            name = node.find("user_name").text
        if j != 0:
            s_title = node.find("series_title").text if node is not None else None
            s_type = node.find("series_type").text if node is not None else None
            s_episodes = node.find("series_episodes").text
            s_score = node.find("my_score").text
            s_status = node.find("my_status").text
    
            rows.append({"mal_user": name, "series_title": s_title, "series_type": s_type, "series_episodes": s_episodes, 
                 "my_score": s_score, "my_status": s_status})
        j = j + 1
    df2 = pd.DataFrame(rows, columns = df_cols)
    df = df.append(df2)
    return df

def main():
    df_cols = ["mal_user", "series_title", "series_type", "series_episodes", "my_score", "my_status"]
    rows = []
    df = pd.DataFrame(rows, columns = df_cols)


    directory = "../lists/"
    for entry in os.scandir(directory):
        df = list_to_df(df, entry)

    df = sort(df)

    df.to_csv('../code/anime_clean.csv')

if __name__ == "__main__":
    main()
