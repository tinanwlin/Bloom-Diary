class WatsonController < ApplicationController
    protect_from_forgery with: :null_session, if: Proc.new { |c| c.request.format == 'application/json' }
    


    def natural_language_understanding
        require 'net/http'
        require 'uri'
        require 'json'
        require 'redcarpet'
        require 'redcarpet/render_strip'

        markdown = Redcarpet::Markdown.new(Redcarpet::Render::StripDown)
        content = markdown.render(params['content'])
        
        all_content = (params['content'])
        day = params['day'].to_i
        month = params['month'].to_i
        year = params['year'].to_i
        
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
            
            req.basic_auth(ENV["LOGIN"], ENV["PASSWORD"])

            response = http.request(req)
            puts response
            results = JSON.parse(response.body)
            puts results

            if !results["code"]
              sadness = results["keywords"][0]["emotion"]["sadness"]
              joy = results["keywords"][0]["emotion"]["joy"]
              fear = results["keywords"][0]["emotion"]["fear"]
              disgust = results["keywords"][0]["emotion"]["disgust"]
              anger = results["keywords"][0]["emotion"]["anger"]
              sentiment_score = results["keywords"][0]["sentiment"]["score"]
              user_id = @current_user.id
              email = User.find(user_id).email
              date = Date.new(year, month, day)

              # This is hard code. We need to change this.
              location = "Vanraining"
              weather = "Sunny"
              
            
              if journal = Journal.check_journal(email, date)
                
                journal.update({
                  content: all_content,
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
                  content: all_content,
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
            render :json => results.to_json
        end
    end
end