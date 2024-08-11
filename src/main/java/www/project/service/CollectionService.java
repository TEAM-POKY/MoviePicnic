package www.project.service;

import www.project.domain.CollectionDTO;

import java.util.List;

public interface CollectionService {

    List<CollectionDTO> getList(String currentId);

    int newList(CollectionDTO collectionDTO);
}
