class CreateTableUploads < ActiveRecord::Migration
	  def change

	  	add_attachment :page, :image

	    create_table :table_uploads do |t|
	    t.string :name		
	    t.string :type		
	    t.string :url		
	    t.integer :size
	    t.references :page, index: true, foreign_key: true	  
	    t.references :user, index: true, foreign_key: true  
    end
  end
end
