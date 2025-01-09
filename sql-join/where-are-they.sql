select "line1",
       "cities"."name" as "cityName",
       "district",
       "countries"."name" as "countryName"
  from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId");
