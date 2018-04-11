class WatsonController < ApplicationController
    protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
    


    def natural_language_understanding
      puts "--------------------"
      puts @journal
        require 'net/http'
        require 'uri'
        require 'json'
        require 'sanitize'

        puts "call watson!!"
        content = Sanitize.clean(params['content'])
        puts content
        begin
        
            uri = URI.parse("https://gateway.watsonplatform.net/natural-language-understanding/api/v1/analyze?version=2018-03-16")
            http = Net::HTTP.new(uri.host, uri.port)
            http.use_ssl = true
            http.verify_mode = OpenSSL::SSL::VERIFY_PEER
            req = Net::HTTP::Post.new(uri.request_uri, initheader = { 'Content-Type'=> "application/json"})
            payload = {
                        "text" => content,
                        "features" => {
                          "entities"=> {
                            "emotion"=> false,
                            "sentiment"=> false,
                            "limit"=> 2
                          },
                          "keywords"=> {
                            "emotion"=> true,
                            "sentiment"=> true,
                            "limit"=> 2
                          }
                        }
                      }
            req.body = payload.to_json
            req.basic_auth("ac49cf55-8ee6-485e-aed0-956429714dc0", "Rfeif6hCMbLD")

            response = http.request(req)
            results = JSON.parse(response.body)

            sadness = results["keywords"][0]["emotion"]["sadness"]
            joy = results["keywords"][0]["emotion"]["joy"]
            fear = results["keywords"][0]["emotion"]["fear"]
            disgust = results["keywords"][0]["emotion"]["disgust"]
            anger = results["keywords"][0]["emotion"]["anger"]
            sentiment_score = results["keywords"][0]["sentiment"]["score"]
            description = content
            user_id = @current_user.id
            email = User.find(user_id).email

          #  This is hard code. We need to change this.
            location = "Vanraining"
            weather = "Sunny"
            date = Date.new(2018, 4, 6)
           

            if journal = Journal.check_journal(email, date)

              journal.update({
                content: description,
                sentiment_score: sentiment_score,
                joy: joy,
                anger: anger,
                disgust: disgust,
                sadness: sadness,
                fear: fear,
                location: location,
                weather: weather,
              })

            else
              Journal.create!({
                user_id: user_id,
                content: description,
                sentiment_score: sentiment_score,
                joy: joy,
                anger: anger,
                disgust: disgust,
                sadness: sadness,
                fear: fear,
                location: location,
                weather: weather,
                date: date,
              })

            end
        end
    end
end