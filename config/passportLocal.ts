/* eslint-disable @typescript-eslint/no-explicit-any */
'use strict';

import passport from 'passport';
import { LocalUser as User } from '../src/models/schemas/User_Schema.js';
import LocalStrategy from 'passport-local-mongoose';

const StrategyLocal: any = LocalStrategy;

passport.use(new StrategyLocal(User.authenticate()));
