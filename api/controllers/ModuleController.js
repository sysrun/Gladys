/** 
  * Gladys Project
  * http://gladysproject.com
  * Software under licence Creative Commons 3.0 France 
  * http://creativecommons.org/licenses/by-nc-sa/3.0/fr/
  * You may not use this software for commercial purposes.
  * @author :: Pierre-Gilles Leymarie
  */

module.exports = {
    
    /**
     * Get all modules
     */
    index: function(req, res, next){
      gladys.module.get()
            .then(function(modules){
                return res.json(modules);
            })  
            .catch(next);
    },
    
    /**
     * Install a given module
     */
    install: function(req, res, next){
        gladys.module.install(req.body)
              .then(function(module){
                  return res.json(module);
              })
              .catch(next);
    },
    
    
    config: function(req, res, next){
        gladys.module.config({slug: req.params.slug})
          .then(function(){
              return res.json({success: true});
          })
          .catch(next);
    },
    
    uninstall: function(req, res, next){
        gladys.module.uninstall({id: req.params.id})
          .then(function(module){
              return res.json(module);
          })
          .catch(next);
    }
	
};

