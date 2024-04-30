package ngo.dsms.dsms.repo;

import ngo.dsms.dsms.model.Adoptee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdopteeRepo extends JpaRepository<Adoptee, Integer> {
}
