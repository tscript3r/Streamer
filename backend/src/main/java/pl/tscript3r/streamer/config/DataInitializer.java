package pl.tscript3r.streamer.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import pl.tscript3r.streamer.stream.StreamEntity;
import pl.tscript3r.streamer.stream.StreamRepository;
import reactor.core.publisher.Flux;

@Slf4j
@Component
@Profile("dev")
@RequiredArgsConstructor
public class DataInitializer implements ApplicationListener<ApplicationReadyEvent> {

    private final StreamRepository streamRepository;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        streamRepository.deleteAll()
                .thenMany(
                        Flux.just("First", "Second", "Third")
                                .map(s -> new StreamEntity(s + " stream", "The " + s + " stream here"))
                                .flatMap(streamRepository::save))
                .thenMany(streamRepository.findAll())
                .subscribe(stream -> log.info("Saved " + stream.toString()));
    }

}