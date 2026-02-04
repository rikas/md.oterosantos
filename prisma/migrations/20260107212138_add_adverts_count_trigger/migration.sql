-- This is an empty migration.
-- You can add your SQL statements here to modify the database schema.

CREATE OR REPLACE FUNCTION update_user_adverts_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE "User" SET "advertsCount" = "advertsCount" + 1 WHERE id = NEW."userId";
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE "User" SET "advertsCount" = "advertsCount" - 1 WHERE id = OLD."userId";
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER adverts_count_trigger
AFTER INSERT OR DELETE ON "Advert"
FOR EACH ROW EXECUTE FUNCTION update_user_adverts_count();
