class WatsonController < ApplicationController
    protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  
    def make_post_req  
        puts "testing in process"
        require 'net/http'
        require 'uri'
    
        begin
        
            
            url = URI("https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-03-16")
            
            http = Net::HTTP.new(url.host, url.port)
            http.use_ssl = true
            http.verify_mode = OpenSSL::SSL::VERIFY_NONE
            
            req = Net::HTTP::Put.new(url)
            req.basic_auth("ac49cf55-8ee6-485e-aed0-956429714dc0", "Rfeif6hCMbLD")
            req.content_type = "application/json"
            req.body = {
                                "text": "I'm very happy when I'm at home",
                                "features": {
                                  "entities": {
                                    "emotion": false,
                                    "sentiment": false,
                                    "limit": 2
                                  },
                                  "keywords": {
                                    "emotion": true,
                                    "sentiment": false,
                                    "limit": 2
                                  }
                                }
                              }
                              
            response = http.request(req)
            puts response.read_body
          
        end
    end
end



# uri = URI.parse("https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-03-16")
#             request = Net::HTTP::Post.new(uri)
#             request.basic_auth("ac49cf55-8ee6-485e-aed0-956429714dc0", "Rfeif6hCMbLD")
#             request.content_type = "application/json"
#             request.body = {
#                 "text": "I'm very happy when I'm at home",
#                 "features": {
#                   "entities": {
#                     "emotion": false,
#                     "sentiment": false,
#                     "limit": 2
#                   },
#                   "keywords": {
#                     "emotion": true,
#                     "sentiment": false,
#                     "limit": 2
#                   }
#                 }
#               }

#             req_options = {
#             use_ssl: uri.scheme == "https",
#             }
              
#             response = Net::HTTP.start(uri.host, uri.port, req_options) {|http| http.request(request)}
          