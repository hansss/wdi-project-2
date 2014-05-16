class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.integer :sender_id
      t.integer :recepient_id
      t.text :content

      t.timestamps
    end
  end
end
