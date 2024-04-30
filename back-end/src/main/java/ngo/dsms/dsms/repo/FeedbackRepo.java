package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Feedback;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FeedbackRepo extends JpaRepository<Feedback, Integer> {

    public List<Feedback> findAllByRatingGreaterThan(Integer value);
}
