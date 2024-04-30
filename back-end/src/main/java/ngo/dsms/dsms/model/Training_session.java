package ngo.dsms.dsms.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.sql.Date;
import java.sql.Time;

@Component
@Scope("prototype")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Training_session {

    @Id
    private int session_ID;
    private int trainer_ID;
    private int dog_ID;
    private Date date;
    private Time time;
    private String notes;

}
