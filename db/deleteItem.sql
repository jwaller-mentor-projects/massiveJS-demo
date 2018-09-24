DELETE FROM collectibles 
WHERE id = $1;
SELECT *
FROM collectibles