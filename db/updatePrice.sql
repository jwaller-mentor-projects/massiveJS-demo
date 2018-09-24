UPDATE collectibles
SET price = $2
WHERE id = $1;
-- RETURNING *;
SELECT *
FROM collectibles;