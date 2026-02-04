CREATE OR REPLACE FUNCTION update_advertiser_adverts_count()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    UPDATE "Advertiser" SET "advertsCount" = "advertsCount" + 1 WHERE id = NEW."advertiserId";
  ELSIF TG_OP = 'DELETE' THEN
    UPDATE "Advertiser" SET "advertsCount" = "advertsCount" - 1 WHERE id = OLD."advertiserId";
  END IF;
  RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Drop old trigger
DROP TRIGGER adverts_count_trigger ON "Advert";
DROP FUNCTION update_user_adverts_count;


-- Create trigger
CREATE TRIGGER adverts_count_trigger
AFTER INSERT OR DELETE ON "Advert"
FOR EACH ROW EXECUTE FUNCTION update_advertiser_adverts_count();
