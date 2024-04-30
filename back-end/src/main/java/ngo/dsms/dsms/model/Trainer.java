package ngo.dsms.dsms.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;


@Component
@Scope("prototype")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Trainer {

    @Id
    private int trainer_ID;
    private String fullname;
    private String phone;
    private String email;
    private String speciality;

}
