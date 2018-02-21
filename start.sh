docker rm -f same-bot
docker build -t same-bot .
docker run -d --name same-bot same-bot