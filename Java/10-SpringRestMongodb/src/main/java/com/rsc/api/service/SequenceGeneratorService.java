package com.rsc.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.stereotype.Service;
import org.springframework.data.mongodb.core.query.Update;
import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;
import static org.springframework.data.mongodb.core.query.Criteria.where;
import static org.springframework.data.mongodb.core.query.Query.query;

import java.util.Objects;

import com.rsc.api.model.DatabaseSequence;

@Service
public class SequenceGeneratorService {
	@Autowired
	private MongoOperations mongo;

	public int getNextSequence(String seqName) {
		DatabaseSequence counter = mongo.findAndModify(query(where("_id").is(seqName)), new Update().inc("seq", 1),
				options().returnNew(true).upsert(true), DatabaseSequence.class);
		return counter.getSeq();
	}
}
