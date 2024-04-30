package ngo.dsms.dsms.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import java.sql.Date;

@Component
@Scope("prototype")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Maintenance {

    @Id
    private int request_ID;
    private int shelter_ID;
    private String description;
    private Date date;

}

