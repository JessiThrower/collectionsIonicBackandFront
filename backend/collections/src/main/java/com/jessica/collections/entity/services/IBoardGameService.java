package com.jessica.collections.entity.services;

import java.util.List;

import com.jessica.collections.entity.models.BoardGame;

public interface IBoardGameService {
	public BoardGame get(long id);
	public List<BoardGame> getAll();
	public void post(BoardGame boardgame);
	public void put(BoardGame boardgame, long id);
	public void delete(long id);
}
