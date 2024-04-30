package ngo.dsms.dsms;

import ngo.dsms.dsms.model.Feedback;
import ngo.dsms.dsms.repo.FeedbackRepo;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

@SpringBootApplication
public class DsmsApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(DsmsApplication.class, args);
		Feedback f1=context.getBean(Feedback.class);

	}

}
