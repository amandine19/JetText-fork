class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
      t.string     :name
      t.integer    :parent, limit: 4
      t.binary     :content, limit: 16777215
      t.references :container, index: true, foreign_key: true
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false

      t.datetime   null: false
      t.datetime   null: false
      t.string     :image_file_name,    limit: 255
      t.binary     :image_content_type,  limit: 16777215
      t.integer    :image_file_size,    limit: 4

    end
  end
end
