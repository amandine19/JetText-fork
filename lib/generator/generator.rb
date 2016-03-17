module Generator

	require 'fileutils'

  def self.generate(container, pages)
  	container.content = gsub_content(container.content)
  	container.content = container.content.gsub!("../#{container.url}", ".")
    File.open("#{Rails.public_path}/#{container.url}/index.html", "w+") do |f|
      f.write(
        "<html>\n" \
        + "\t<head>\n" \
        + "\t</head>\n" \
        + "\t<body>\n\n" \
      )
      f.write("\t\t<div>"+container.content+"</div>\n\n") if container.content
      f.write(
        "\t</body>\n" \
        + "</html>" \
      )
      f.close
    end

    pages.each do |page|
    	page.content = gsub_content(page.content)
    	page.content = page.content.gsub!("../#{container.url}", ".")
    	File.open("#{Rails.public_path}/#{container.url}/#{page.name}.html", "w+") do |f|
	      f.write(
	        "<html>\n" \
	        + "\t<head>\n" \
	        + "\t</head>\n" \
	        + "\t<body>\n\n" \
	      )
	      f.write("\t\t<div>"+page.content+"</div>\n\n") if page.content
	      f.write(
	        "\t</body>\n" \
	        + "</html>" \
	      )
	      f.close
	    end
    end

    return true
  end

  def self.gsub_content(content)
  	patterns = [
  		'<body>',
  		'</body>',
  		'<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "http://www.w3.org/TR/REC-html40/loose.dtd">',
  		'<html>',
  		'</html>'
  	]
  	patterns.map {|s| content.gsub!(s, '')}
  	return content
  end

end