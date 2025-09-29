FROM openjdk:21-jdk-slim

WORKDIR /app

# Copy the packaged JAR file (adjust name if different)
COPY ./target/ems-0.0.1-SNAPSHOT.jar app.jar

# Run the JAR
ENTRYPOINT ["java","-jar","app.jar"]
