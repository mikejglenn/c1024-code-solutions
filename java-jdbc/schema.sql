set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

create table public.books (
  bookid      serial,
  title       text not null,
  author      text not null,
  published   timestamptz(6),
  primary key (bookid)
);
