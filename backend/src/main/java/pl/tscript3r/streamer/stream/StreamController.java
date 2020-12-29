package pl.tscript3r.streamer.stream;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping(value = "/streams", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class StreamController {

    private final StreamRepository streamRepository;

    @GetMapping
    public Flux<StreamEntity> getStreams() {
        return streamRepository.findAll();
    }

    @GetMapping("{id}")
    public Mono<StreamEntity> getStream(@PathVariable String id) {
        return streamRepository.findById(id);
    }

    @PostMapping
    public Mono<StreamEntity> createStream(@RequestBody StreamEntity streamEntity) {
        return streamRepository.save(streamEntity);
    }

    @PutMapping("{id}")
    public Mono<StreamEntity> updateStream(@PathVariable String id, @RequestBody StreamEntity streamEntity) {
        return streamRepository.save(streamEntity);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?> delete(@PathVariable String id) {
        streamRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

}
