class CreateJournals < ActiveRecord::Migration[5.1]
  def change
    create_table :journals do |t|
      t.integer :user_id
      t.text :content
      t.float :sentiment_score
      t.float :joy
      t.float :anger
      t.float :disgust
      t.float :sadness
      t.float :fear
      t.string :location
      t.string :weather
      t.date :date

      t.timestamps
    end
  end
end
