const User = require('../models/User');
const Thought = require('../models/Thought');



const thoughtController = {
  async getAllThoughts(req, res) {
    try {
      const thoughts = await Thought.find()
      
      res.json(thoughts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },

  async getThoughtById(req, res) {
    try {
      const { id } = req.params;
      const thought = await Thought.findById(id)
      if (!thought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      res.json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async createThought(req, res) {
    try {
      const { thoughtText, username, userId } = req.body;
      const thought = await Thought.create({
        thoughtText,
        username,
        userId,
      });
      await User.findByIdAndUpdate(userId, {
        $push: { thoughts: thought._id },
      });
      res.status(201).json(thought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async updateThought(req, res) {
    try {
      const { id } = req.params;
      const { thoughtText } = req.body;
      const updatedThought = await Thought.findByIdAndUpdate(
        id,
        { thoughtText },
        { new: true }
      );
      if (!updatedThought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async deleteThought(req, res) {
    try {
      const { id } = req.params;
      const deletedThought = await Thought.findByIdAndDelete(id);
      if (!deletedThought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      await User.findByIdAndUpdate(deletedThought.userId, {
        $pull: { thoughts: id },
      });
      res.json({ message: 'Thought deleted' });
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async addReaction(req, res) {
    try {
      const { thoughtId } = req.params;
      const { reactionBody, username } = req.body;
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $push: {
            reactions: { reactionBody, username },
          },
        },
        { new: true }
      );
      if (!updatedThought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async removeReaction(req, res) {
    try {
      const { thoughtId } = req.params;
      const { reactionId } = req.body;
      const updatedThought = await Thought.findByIdAndUpdate(
        thoughtId,
        {
          $pull: {
            reactions: { reactionId },
          },
        },
        { new: true }
      );
      if (!updatedThought) {
        res.status(404).json({ message: 'Thought not found' });
        return;
      }
      res.json(updatedThought);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};

module.exports = thoughtController;
