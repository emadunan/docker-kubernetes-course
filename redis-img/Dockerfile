# Use an existing image as a base
FROM alpine

# Download and install dependency
RUN apk add --update redis
RUN apk add --update gcc

# Tell th image what to do as container when it start
CMD ["redis-server"]
