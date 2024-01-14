import pandas as pd

# reading
titanic = pd.read_csv("data/titanic.csv")

# dataframe description
print(titanic)
print(titanic.head(8))
print(titanic.tail(10))
print(titanic.dtypes)

# writing
# titanic.to_excel("data/titanic.xlsx", sheet_name="passengers", index=False)

# reading from excel
titanic_from_excel = pd.read_excel("data/titanic.xlsx", sheet_name="passengers")
print(titanic_from_excel)

#technical summary
print(titanic.info())
print(titanic_from_excel.info())
