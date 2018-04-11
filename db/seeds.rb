# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Data ..."

# Helper functions
# def open_asset(file_name)
#   File.open(Rails.root.join('db', 'seed_assets', file_name))
# end

# Only run on development (local) instances not on production, etc.
unless Rails.env.development?
  puts "Development seeds only (for now)!"
  exit 0
end

# Start creating ...

## Users

puts "Re-creating Users ..."

User.destroy_all

User.create!({
  email: 'pogo@pogo.com',
  nickname: 'Pogo',
  password: '1234',
  password_confirmation: '1234'
})

User.create!({
  email: 'uncle@uncle.com',
  nickname: 'Uncle',
  password: '1234',
  password_confirmation: '1234'
})

User.create!({
  email: 'berry@berry.com',
  nickname: 'Berry',
  password: 'abcd',
  password_confirmation: 'abcd'
})

User.create!({
  email: 'beard@beard.com',
  nickname: 'Beard',
  password: 'abcd',
  password_confirmation: 'abcd'
})


puts "DONE!"

puts "Re-creating Journals ..."

Journal.destroy_all

Journal.create!({
  user_id: 1,
  content: "I'm back home. It was a long trip back, but I made it. I don't really know what else to talk about, I left my favorite pair of pants at my sister's house. My biological mom still hasn't text me back from yesterday. So I really don't know.",
  sentiment_score: -0.768805,
  joy: 0.253193,
  anger: 0.193189,
  disgust: 0.057855,
  sadness: 0.487505,
  fear: 0.193544,
  location: "Vancouver",
  weather: "Sunny",
  date: Date.new(2018, 4, 6),
  created_at: 1.days.ago, 
  updated_at: 1.days.ago
})

Journal.create!({
  user_id: 1,
  content: "She advised him to come back at once. Italy is my favorite country; in fact, I plan to spend two weeks there next year.",
  sentiment_score: 0.707588,
  joy: 0.381493,
  anger: 0.052344,
  disgust: 0.037181,
  sadness: 0.209714,
  fear: 0.107102,
  location: "Vancouver",
  weather: "Raining",
  date: Date.new(2018, 4, 8),
  created_at: 2.days.ago, 
  updated_at: 2.days.ago
})


Journal.create!({
  user_id: 2,
  content: "I didn't pass my exam today, I feel so upset and want to go travel alone right away.",
  sentiment_score: -0.888506,
  joy: 0.021629,
  anger: 0.213758,
  disgust: 0.026878,
  sadness: 0.455395,
  fear: 0.566535,
  location: "Paris",
  weather: "Cloudy",
  date: Date.new(2018, 4, 9),
  created_at: 2.days.ago, 
  updated_at: 2.days.ago
})

Journal.create!({
  user_id: 3,
  content: "I got a job!! I have been looking for this job for three months, I am ready to start my new life and earn a lot of money.",
  sentiment_score: 0.694259,
  joy: 0.705978,
  anger: 0.094566,
  disgust: 0.026568,
  sadness: 0.106472,
  fear: 0.074198,
  location: "Toronto",
  weather: "Cloudy",
  date: Date.new(2018, 4, 9),
  created_at: 3.days.ago, 
  updated_at: 3.days.ago
})


puts "DONE!"



