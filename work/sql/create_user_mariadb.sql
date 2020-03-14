--
-- Create a user user:pass with backward compatible login.
--
DROP USER IF EXISTS 'user'@'%';

CREATE USER 'user'@'%'
    IDENTIFIED
    BY 'pass'
;

GRANT ALL PRIVILEGES
    ON *.*
    TO 'user'@'%'
;
