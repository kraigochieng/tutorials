import pandas as pd

# dataframe
df = pd.DataFrame({
    "Name": ["Braund", "Allen", "Bonnel"],
    "Age": [1 ,2 ,3],
    "Sex": ["m", "f", "m"],
    "Score": [13, 74, 90]
})

print(df)
print(df["Name"])

# series
ages = pd.Series([4, 5, 6], name="age")
print(ages)

# max value in series
print(df["Age"].max())

print(df.describe())
print(df.describe()["Age"])

