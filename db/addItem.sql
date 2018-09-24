INSERT INTO collectibles
    (name,price)
VALUES
    ($1, $2);
-- RETURNING *;
SELECT *
from collectibles;