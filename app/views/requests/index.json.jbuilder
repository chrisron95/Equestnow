json.array!(@requests) do |request|
  json.extract! request, :id, :song_name, :artist_name, :album_name, :user_id
  json.url request_url(request, format: :json)
end
