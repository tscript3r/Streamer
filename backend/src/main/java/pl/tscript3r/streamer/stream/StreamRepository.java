package pl.tscript3r.streamer.stream;

import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StreamRepository extends ReactiveCrudRepository<StreamEntity, String> {
}
