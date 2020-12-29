package pl.tscript3r.streamer.stream;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@ToString
@Document
@NoArgsConstructor
public class StreamEntity implements Serializable {

    @Id
    private String id;
    private String title;
    private String description;
    @CreatedDate
    private LocalDateTime createdTimestamp;

    public StreamEntity(String title, String description) {
        this.title = title;
        this.description = description;
    }

}
