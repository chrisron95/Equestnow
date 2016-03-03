class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.string :song_name
      t.string :artist_name
      t.string :album_name
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
