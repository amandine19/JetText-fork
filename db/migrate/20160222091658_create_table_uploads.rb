class CreateTableUploads < ActiveRecord::Migration
	  def change
	    create_table :table_uploads do |t|
	    t.string :name		
	    t.string :type		
	    t.string :url		
	    t.integer :size
	    #t.references :page, index: true, foreign_key: true	    
    end
  end
end
