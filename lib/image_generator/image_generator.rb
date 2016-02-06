module ImageGenerator

  def self.image_transformer(html, url)
    require 'fileutils'
    doc = Nokogiri::HTML(html)
    images = doc.search('img') if doc.search('img').present?
    unless images.nil?
      images.each_with_index do |item, index|
        if item['src']['data:image/'].to_s.length > 0
          format = item['src'].split(';')[0].split('/')[-1]
          if format =~ /^*(png|jpg|jpeg|gif)$/
            content = Base64.decode64(item['src']["data:image/#{format};base64,".length .. -1])
            path = "#{Rails.root}/public/#{url}/img/"
            create_image(content, path, url, index, format)
            item['src'] = "/#{url}/img/image#{index}.#{format}"
          end
        end
      end
    end
    return doc
  end

  def self.create_image(content, path, url, index, format)
    unless File.directory?("#{path}")
      FileUtils.mkdir_p "#{path}/img"
    end
    i = define_index("#{path}/img", index, format)
    File.open("#{path}/image#{i}.#{format}", 'wb') { |f| f.write(content) }
  end

  def self.define_index(path, index, format)
    image_name = "image#{index}.#{format}"
    if File.exist?("#{path}/#{image_name}")
      return define_index(path, index += 1, format)
    else
      return index
    end
  end

end