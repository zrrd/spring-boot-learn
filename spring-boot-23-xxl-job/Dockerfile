FROM  java:8
VOLUME /tmp
ADD  target/spring-boot-23-xxl-job-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT [ "sh", "-c", "java -Dspring.profiles.active=dev -jar app.jar"]
