import { Instance, SnapshotIn, SnapshotOut, types } from "mobx-state-tree"
import { CharacterModel, CharacterSnapshotOut } from "../character/character"
import { CharacterApi } from "../../services/api/character-api"
import { withEnvironment } from "../extensions/with-environment"
import { UserModel, UserSnapshotOut } from "../users/user"

/**
 * Example store containing Rick and Morty characters
 */
export const UserStoreModel = types
  .model("UserStore")
  .props({
    users: types.optional(types.array(UserModel), []),
  })
  .extend(withEnvironment)
  .actions((self) => ({
    applyUsers: (newUser: any) => {
      self.users = self.users.concat([newUser])
    },
  }))
  .actions((self) => ({
    addUser: () => {
      const possibleNewUsers = [
        {
            username: 'Reynald',
            email: 'reynald@example.com'
        },
        {
            username: 'Prabha',
            email: 'prabha@example.com'
        },
        {
            username: 'Nova',
            email: 'nova@example.com'
        },
      ]

      self.applyUsers(possibleNewUsers[Math.floor(Math.random() * possibleNewUsers.length)])
    }
  }))

export interface UserStore extends Instance<typeof UserStoreModel> {}
export interface UserStoreSnapshotOut extends SnapshotOut<typeof UserStoreModel> {}
export interface UserStoreSnapshotIn extends SnapshotIn<typeof UserStoreModel> {}
export const createUserStoreDefaultModel = () => types.optional(UserStoreModel, {})
