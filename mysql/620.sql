# Write your MySQL query statement below
select *
from Cinema
where MOD(id, 2) = 1 and description not like 'boring'
order by rating desc
