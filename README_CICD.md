# Tạo image
docker build -t website-byn-app .

# Chạy image đã tạo trên port 8080
docker run -p 8089:80 website-byn-app