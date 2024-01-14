import pandas as pd
import matplotlib.pyplot as plt

air_quality = pd.read_csv("data/air_quality_no2.csv", index_col=0, parse_dates=True)

print(air_quality.head())

air_quality.plot()
plt.show()

air_quality["station_paris"].plot()
plt.show()
