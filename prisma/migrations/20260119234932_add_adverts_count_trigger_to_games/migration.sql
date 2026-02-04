-- This is an empty migration.
-- You can add your SQL statements here to modify the database schema.

CREATE OR REPLACE FUNCTION update_game_adverts_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE "Game" SET "advertsCount" = "advertsCount" + 1 WHERE id = NEW."gameId";
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE "Game" SET "advertsCount" = "advertsCount" - 1 WHERE id = OLD."gameId";
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER game_adverts_count_trigger
AFTER INSERT OR DELETE ON "AdvertGame"
FOR EACH ROW EXECUTE FUNCTION update_game_adverts_count();
