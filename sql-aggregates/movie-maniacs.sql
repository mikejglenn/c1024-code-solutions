select "c"."firstName",
       "c"."lastName",
       sum("p"."amount") as "totalAmount"
  from "customers" as "c"
  join "rentals" using ("customerId")
  join "payments" as "p" using ("rentalId")
  group by "c"."customerId"
  order by "totalAmount" desc;
