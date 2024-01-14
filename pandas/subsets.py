import pandas as pd

titanic = pd.read_csv("data/titanic.csv")
print(titanic.shape)
print(titanic["Age"].shape)
print(type(titanic["Age"]))
print(titanic["Age"].dtypes)


age_and_sex = titanic[["Age", "Sex"]]

print(age_and_sex.head())

print(age_and_sex[age_and_sex["Age"] > 35])

print(titanic["Age"] > 35)

class_2_3 = titanic[titanic["Pclass"].isin([2, 3])]
print(class_2_3)

age_no_na = titanic[titanic["Age"].notna()]
print(age_no_na)

adult_names = titanic.loc[titanic["Age"] > 35, "Name"]
print(adult_names)
