class WatsonController < ApplicationController
    protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
  
    def make_post_req  
        puts "testing in process"
        require 'net/http'
        require 'uri'
        require 'json'

    
        begin
        
            uri = URI.parse("https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-03-16")
            http = Net::HTTP.new(uri.host, uri.port)
            http.use_ssl = true
            http.verify_mode = OpenSSL::SSL::VERIFY_PEER
            req = Net::HTTP::Post.new(uri.request_uri, initheader = { 'Content-Type'=> "application/json"})
            payload = {
                        "text" => "I'm very happy when I'm at home",
                        "features" => {
                          "entities"=> {
                            "emotion"=> false,
                            "sentiment"=> false,
                            "limit"=> 2
                          },
                          "keywords"=> {
                            "emotion"=> true,
                            "sentiment"=> false,
                            "limit"=> 2
                          }
                        }
                      }
            req.body = payload.to_json
            req.basic_auth("ac49cf55-8ee6-485e-aed0-956429714dc0", "Rfeif6hCMbLD")

            response = http.request(req)
            puts 'result------------'
            puts response.body
           
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
          